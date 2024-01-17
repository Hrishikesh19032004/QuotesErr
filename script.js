
      let realData = "";
      let quotesData = "";
      let auth = "";
      const quotes = document.getElementById("quotes");
      const author = document.getElementById("author");
      const btn = document.getElementById("btn");
      const tweet = document.getElementById("tweet");

      const tweetNow = () => {
        let tweetPost = `https://twitter.com/intent/tweet?text=${quotesData.text} ${auth}`;
        window.open(tweetPost);
      };

      // const getRealQuotes=()=>{
      //     let num=Math.floor(Math.random()*10);
      //     quotesData=realData[num];
      //     quotes.innerText=`${realData[num].text}`;

      //     if(realData.author.includes(', type.fit')){
      //     auth=realData.author.replace(', type.fit', ' ');
      //     }
      //     quotesData.author != null ? author.innerText=`${auth}` : author.innerText="Unknown";
      // }

      const getRealQuotes = () => {
        let num = Math.floor(Math.random() * 10);
        quotesData = realData[num];
        quotes.innerText = `${realData[num].text}`;
      
        if (quotesData.author && quotesData.author.includes(", type.fit")) {
          auth = quotesData.author.replace(", type.fit", " ");
        }
      
        // Update the condition here
        quotesData.author !== null && quotesData.author !== undefined
          ? (author.innerText = `${auth}`)
          : (author.innerText = "Unknown");
      };

      const getQuotes = async () => {
        const api = "https://type.fit/api/quotes";
        try {
          let data = await fetch(api);
          realData = await data.json();
          getRealQuotes();
        } catch (error) {}
      };
      tweet.addEventListener("click", tweetNow);
      btn.addEventListener("click", getRealQuotes);
      getQuotes();
    