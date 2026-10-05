/**
 * Inline, pre-hydration guard against stale deploys on static hosting.
 *
 * After a gh-pages deploy, a browser may hold cached HTML pointing at old
 * /_next/static chunk hashes. Those 404 → ChunkLoadError → blank page.
 * This script catches failed _next/static script/css loads and chunk-load
 * errors, then reloads once with a cache-busting ?v= query (guarded by
 * sessionStorage so it can never loop).
 */
const SCRIPT = `(function(){
  var KEY="ms-chunk-reload";
  function reload(){
    try{
      var last=+sessionStorage.getItem(KEY)||0;
      if(Date.now()-last<30000)return;
      sessionStorage.setItem(KEY,String(Date.now()));
    }catch(e){}
    var u=new URL(location.href);
    u.searchParams.set("v",String(Date.now()));
    location.replace(u.toString());
  }
  function isChunkErr(r){
    if(!r)return false;
    var s=String((r&&(r.name+" "+r.message))||r);
    return /ChunkLoadError|Loading (CSS )?chunk|Failed to fetch dynamically imported module|Importing a module script failed/i.test(s);
  }
  window.addEventListener("error",function(ev){
    var t=ev&&ev.target;
    if(t&&(t.tagName==="SCRIPT"||t.tagName==="LINK")){
      var src=t.src||t.href||"";
      if(src.indexOf("/_next/static/")!==-1)reload();
      return;
    }
    if(isChunkErr(ev&&ev.error)||isChunkErr(ev&&ev.message))reload();
  },true);
  window.addEventListener("unhandledrejection",function(ev){
    if(isChunkErr(ev&&ev.reason))reload();
  });
  window.addEventListener("load",function(){
    // Backup: a chunk that 404'd before this listener existed.
    try{
      var bad=performance.getEntriesByType("resource").some(function(e){
        return e.name.indexOf("/_next/static/")!==-1&&e.responseStatus>=400;
      });
      if(bad){reload();return;}
    }catch(e){}
    // Clean the ?v= marker once the page booted fine.
    try{
      var u=new URL(location.href);
      if(u.searchParams.has("v")){u.searchParams.delete("v");history.replaceState(history.state,"",u.toString());}
    }catch(e){}
  });
})();`;

export function ChunkReload() {
  return <script id="ms-chunk-reload" dangerouslySetInnerHTML={{ __html: SCRIPT }} />;
}
