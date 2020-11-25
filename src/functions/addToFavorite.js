export const addToFavorite = async (item)=>{
    // check if local storage has it already
    const getFavorite = JSON.parse(localStorage.getItem('favoriteMovies'))
    if(!getFavorite)localStorage.setItem('favoriteMovies',JSON.stringify([item]));
  
      
      const newData = JSON.parse(localStorage.getItem('favoriteMovies'));
      
      let idArrays = [];
      newData.map((data)=>idArrays.push(data.id))
    if(idArrays.includes(item.id)){
      alert(`${item.original_title} is already in favorites`)
      return;
    }else{
      const newItem = [...newData,item]
      localStorage.setItem('favoriteMovies',JSON.stringify(newItem));
    }
  
    
    }