const loadData = async ()=>{
   try{
    const response = await fetch('https://openapi.programming-hero.com/api/news/categories');
     const data = await response.json();
      categories = data.data.news_category;
      //console.log(categories);
   
   }catch(err){
    console.log('Error', err);
   }
    
    const tabContainer = document.getElementById('tab-container');
    //sort
    categories.slice(0,3).forEach((category) =>{
     // console.log(category);

       const div = document.createElement('div');
     
       div.innerHTML =`
       <a onclick = "handelCategory('${category.category_id}');" class="tab">${category.category_name}</a> 
       `;
      
      tabContainer.appendChild(div);
    })

}


const handelCategory = async (id) =>{

    try{
        const response = await fetch(`https://openapi.programming-hero.com/api/news/category/${id}`)
        data  =  await response.json();      
      
    }catch(err){
        console.log('Error:', err);
    }
    const cardContainer = document.getElementById('card-container');
    cardContainer.innerHTML ='';

    
    //sort code
    
      const sortElement = data.data;
        const sortData = (a,b)=>{
          return b.total_view - a.total_view;
        }
        sortElement.sort(sortData);
    

    sortElement.forEach((news) =>{

    const div = document.createElement('div');
    div.classList = `card w-96 bg-base-100 shadow-xl`;
    div.innerHTML = `
    <figure>
    <img
      src="${news.image_url}"
      alt="image"
    />
  </figure>
  <div class="card-body">
    <h2 class="card-title">
     ${news.title || 'Title not found'}
      <div class="badge badge-secondary p-5">Excellent</div>
    </h2>
    <p>
     ${news.details.slice(0,70)}
    </p>
    <p>Total views:${news.total_view} </p>
    <div class="card-footer flex justify-between mt-8">
      <div class="flex">
        <div>
          <div class="avatar online">
            <div class="w-14 rounded-full">
              <img
                src="${news.author.img}"
              />
            </div>
          </div>
        </div>
        <div>
          <h6>${news.author.name || 'No Author'}</h6>
          <small>${news.author.published_date}</small>
        </div>
      </div>
      <div class="card-detaild-btn">
        <button
          class="inline-block cursor-pointer rounded-md bg-gray-800 px-4 py-3 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-900"
        >
          Details
        </button>
      </div>
    </div>
  </div>
</div>
    `
   
    cardContainer.appendChild(div);

    })
    
}   





loadData();