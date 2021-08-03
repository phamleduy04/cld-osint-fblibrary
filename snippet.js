arr = []
document.querySelectorAll("#content > div > div > div > div._7lcc > div._8n-_ > div > div > div:nth-child(4) > div:nth-child(3) > div._9cb_ > div").forEach(el => {
    el.querySelectorAll("a").forEach(el2 => arr.push(new URL(el2.href)));
})
arr.filter(el => el.origin.includes('l.facebook.com'));

arr = arr.map(el => el.searchParams.get('u')).filter(el => el);
arr = arr.map(el => new URL(el).hostname)