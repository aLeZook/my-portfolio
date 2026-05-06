import image1 from '../assets/spring1.jpg'
import image2 from '../assets/spring2.JPG'
import julian from "../assets/julian.jpeg"

function Blog() {
    return (
      <main className="section">
        <h2>My Blog</h2>
        <p>
          Welcome to my blog! Spring break 2026! WOOT!
        </p>
  
        <article className="blog-post">
          <h3>Spring Break 2026</h3>
          <p>Friday of Spring break!
            I met up with my friends to hang out. We went to eat at Panera bread mid day, to grab brunch or so. 
            I personally went in there and was immediately attracted to the cool drinks springy/fresh drinks they have. 
            The strawberry basil drink caught my eye right away! It was really good along with my chicken noodle soup (ouch almost burned my tongue!) 
            and the ciabatta sandwich I ordered. Overall fun time!
            <br></br><br></br>
             However, it reminded me that panera is not cheap haha!
            I will still be going back and buying the monthly unlimited sips because of this.
          </p>
          <img src={image1}></img>
        </article>

        <article className="blog-post">
          <h3>BSides Conference @ SDSU</h3>
          <p>Saturday of Spring Break!
            I attended BSides with Aidan, and some other friends and collegues.
            This conference was cybsercurity based. It was a very fun experience as I had not attended one before.
            During the conference we went to different cyber workshops with different professionals.
            My favorite workshop was actually about bluetooth warwalking.
            <br></br><br></br>In essence,
            this was about going around anywhere detecting devices you can pair with through bluetooth and connect to the devices.
            This guy initally connected to coffee shop receipt printer everytime he walked through it to his work. This made him realize how easy it was to connect to devices.
            The reason he connected to the printer is because after some research on the name that the bluetooth connection appears as, he found out the app needed to 
            connect to the receipt printer. Turns out, he did, and he trolled the workers there once in a while. After that, he went on a journey
            to find out what other devices he could easily connect to.  
            <br></br><br></br>
            He explained a lot more about what he did, but overall it was the part about how easy it is to connect to bluetooth devices like tvs, printers, etc. 
            He DID mention that one bluetooth device that he proved did the correct way to avoid this scenario was apple devices
            because they shift the static MAC address. Bluetooth is definitely a fun topic you can play around and troll people with!
            <br></br><br></br>
            Overall the conference was a blast, and got to meet new people!
          </p>
          <img src={image2}></img>
        </article>

        <article className="blog-post">
          <h3>Celebrated Mom's Birthday</h3>
          <p>Went to Julian over Spring break with my family. There's a really good diner called "Julian's Cafe" and it 
          is really good. Usually I order a Cobb Salad because they serve them in these huge flour tortilla shell. 
          They also have really good chicken pie turnover's. I went there for the first time a few years ago. What I really liked was that they would serve your drinks in a huge 
          texan glass boot. It was a nice experience, but I think they retired those. Anyway, if you go, you definitely need to buy a crumbled apple pie. They are amazing!!!
          I recently tried the boisenberry and apple pie and its really good as well.
          </p>
          <img src={julian}></img>
        </article>

        <article className="blog-post">
          <h3>Worked @ Amazon Warehouse</h3>
          <p>
            A lot less exciting, I had to go to work at Amazon. So part of being flex-time, I need to work at least 4 hours per week in order to not get any points. By their point system,
            when you get to 8 points you get fired. Supposedly. So the goal is to not get to 8 points. I was looking for the photo I took of the view they have every monring in the lunch break room. That view
            is insane. Like, it's a view you'd want to work at 24/7. The warehouse is like at the top of hill and their main break room is at the 2nd level of the warehouse with huge windows on the side. You get a full view of the bottom of the hill which I mean, is Rancho Bernando, so 
            all you see are houses that are worth ALOT. Not to mention, around that warehouse, there are some big tech companies and defense companies like General Atomics, BAE Systems, Teradata, even Sony has a huge building, which by the way, in the night
            because its a huge building, they have cool lightwork at the very top of the building of Sony, which you can see from the parking lot of Amazon. Overall, the area is amazing, but working at Amazon however... is very rough if you're looking for a chill job. 
          </p>
        </article>
      </main>
    );
  }
  
  export default Blog;