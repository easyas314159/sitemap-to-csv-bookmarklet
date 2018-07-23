# sitemap-to-csv-bookmarklet

## Installation

### Chrome

1. In Chrome, click Bookmarks->Bookmark Manager.
2. You should see a new tab with the bookmarks and folders listed.
3. Select the “Bookmarks Bar folder on the left.
4. Click the three dots in the top right, and then select “Add new bookmark" from the drop down.
5. You should see two input fields. Type the name of the bookmark you would like (i.e. sitemap.xml to CSV) in the first field.
6. Paste the javascript code below into the second field.

`!function(){'use strict';function t(t){switch((t=t.documentElement).tagName){case'urlset':return function(t){let e=[];for(let n of t.children){let t={};for(let e of n.children)t[e.tagName]=e.textContent;e.push(t)}return Promise.resolve(e)}(t);case'sitemapindex':return function(t){let n=[];for(let r of t.children){let t=r.getElementsByTagName('loc');if(1!=t.length)throw new Error('Invalid sitemap.xml file');n.push(e(t[0].textContent))}return Promise.all(n)}(t).then(n)}return Promise.resolve([])}function e(e){return function(t){return fetch(t).then(function(t){return t.text()}).then(function(t){return(new window.DOMParser).parseFromString(t,'text/xml')}).catch(function(t){})}(e).then(t)}function n(t){return t.reduce(function(t,e){return t.concat(e)},[])}e(window.location.href).then(function(t){let e=['loc','lastmod','changefreq','priority'],n=[e.join(',')];return t.forEach(function(t){let r=new Array(e.length);r.fill(''),e.forEach(function(e,n){e in t&&(r[n]=t[e])}),n.push(r.join(','))}),n.join('\n')}).then(function(t){let e=new Blob([t],{type:'text/csv'}),n=URL.createObjectURL(e);window.location.href=n})}();
;`

## Usage

1. Navigate to the sitemap in your browser (e.g. http://yoursite.com/sitemap.xml).
2. Click on the bookmark you added above.
