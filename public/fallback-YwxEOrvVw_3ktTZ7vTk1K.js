(()=>{"use strict";self.fallback=async e=>{switch(e.destination){case"document":return caches.match("/offline",{ignoreSearch:!0});case"image":0;case"audio":0;case"video":return caches.match("/video.mp4",{ignoreSearch:!0});default:return Response.error()}}})();