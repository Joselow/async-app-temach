const url = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCG7pu4yj5lvVScl3HJZIYPw&part=snippet%2Cid&order=date&maxResults=10';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '24a1d5d847mshcf06f2402dbd1fdp1d1f0bjsn0d59a48e4c22',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

const urlYT = 'https://www.youtube.com/watch?v='

const content = document.getElementById('content')

const fetchData = async(url) =>{
    
        const response = await fetch(url, options);
        const result = await response.json();
        return result
}

(async() => {
    try {
    const videos = await fetchData(url)
    let view = ` ${videos.items.map((el) => ` 
    <div class=" w-ful md:w-1/2 lg:w-1/3 p-4 text-gray-300">
    <div class="bg-black p-4 rounded-lg ">
    <a href="${urlYT}${el.id.videoId}"  Target=_blank>
    <img src="${el.snippet.thumbnails.high.url}" alt="${el.snippet.description}" class="w-full">
    </a>
      <h4 class="text-md md:text-2xl mt-3">${el.snippet.title}</h4>
    </div>
  </div>`).slice(0,6).join('')

 
}
    `
    content.innerHTML = view
} catch (error) {
    alert('La api falló 😢\n',error);
}
})()

