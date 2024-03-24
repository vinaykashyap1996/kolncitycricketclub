import React from 'react';
import Image from 'next/image';

function AboutUsHero() {
  return (
    <>
      <div className='bg-black text-white h-3/4 w-full flex flex-row justify-around items-start p-20'>
        <div className='justify-items-start'>
          <Image
            src='/IMG_3298.jpg'
            alt='Köln City Cricket Club e.V'
            width={700}
            height={600}
          />
        </div>
        <div className='h-3/4 flex flex-col justify-end text-center'>
          <h1 className='text-white text-transform: uppercase text-6xl'>
            Unleash your passion for Cricket Today
          </h1>
          <br></br>
          <h4 className='text-white text-transform: uppercase text-2xl'>
            KÖLN CITY CRICKET CLUB E.V (KCCC) FOUNDED IN 2024,
          </h4>
          <h4 className='text-white text-transform: uppercase text-2xl'>
            {' '}
            IS ONE OF THE NEWEST CRICKET CLUBS AND THE ENTHUSIASTS OF CRICKET IN
            KÖLN.
          </h4>
          <br></br>
          {/* <h4>
            Ready to kickstart your cricketing journey? Dont wait any longer!
            Join Köln City Cricket Club today and immerse yourself in the
            excitement, passion, and camaraderie that define our beloved sport.
            Whether you dream of representing the German national team or simply
            relishing the joy of playing cricket among friends, your adventure
            begins here. Start your cricket fever today with Köln City Cricket
            Club!
          </h4> */}
        </div>
        {/* <div>
        Welcome to Köln City Cricket Club, where the love for cricket transcends
        borders and cultures, bringing together a vibrant community of
        enthusiasts in the heart of Germany. Our Origins: In 2001, Mr. Sayed
        Haider laid the foundation of Köln City Cricket Club, naming it after
        the city that serves as our home base. Since then, weve flourished
        under his leadership, carving out a niche as one of the most esteemed
        cricket clubs in the North-Rhein Westphalia region. Our Diversity: Köln
        City Cricket Club is a melting pot of talent, drawing members from
        diverse backgrounds and nationalities. From India to Pakistan,
        Bangladesh to Afghanistan, and beyond, our club embraces the rich
        tapestry of cricketing cultures, fostering a sense of unity amidst
        diversity. Our Achievements: Over the years, Köln City Cricket Club has
        etched its name in the annals of cricketing history with numerous
        accolades to our credit. With an impressive track record in the
        Bundesliga and German championships, including 12 victories in the past
        17 years, weve cemented our status as a force to be reckoned with on
        the cricketing circuit. National Representation: Our club takes immense
        pride in nurturing talent that transcends boundaries. Notably, Köln City
        Cricket Club has been instrumental in producing exceptional players
        whove donned the colors of the German national team, with the
        illustrious Dr. Rishi Pillai leading the charge as our esteemed
        spearhead. Community Engagement: Beyond the confines of the cricket
        field, Köln City Cricket Club is deeply rooted in community engagement,
        actively participating in local events and initiatives. Our commitment
        to crickets growth in Europe underscores our dedication to fostering a
        thriving cricketing ecosystem. A Home for All: Whether youre a seasoned
        cricketer honing your skills for national glory or a newcomer eager to
        embrace the sport for the first time, Köln City Cricket Club offers a
        welcoming environment for all. Our expert coaches and top-notch training
        programs cater to players of every level, ensuring that everyone has the
        opportunity to excel and enjoy the game to the fullest. Join Us: We
        invite you to be a part of the Köln City Cricket Club family, where
        camaraderie, passion, and excellence converge on the cricket field.
        Whether youre seeking competitive action in the Bundesliga or simply
        craving the joy of playing cricket among friends, Köln City Cricket Club
        is where your cricketing journey begins. Join us today and become a part
        of our quest to elevate cricketing standards in Köln, Germany, and
        beyond.
      </div> */}
      </div>
      <div className='bg-gray-50 text-black h-1/2 w-full flex flex-col justify-around items-start p-20'>
        <h1 className='text-black text-transform: uppercase text-4xl'>
          Unleash your passion for the Game
        </h1>
        <br></br>
        <h4 className='text-black text-2xl'>
          Experience the thrill of cricket like never before as you join our
          vibrant community of cricket enthusiasts. Whether you are a seasoned
          player or a novice eager to learn, Köln City Cricket Club offers the
          perfect platform to ignite your passion for the game.
        </h4>
      </div>
      <div className='bg-black text-white h-1/2 w-full flex flex-col justify-around items-start p-20'>
        <h1 className='text-white text-transform: uppercase text-4xl ml-auto'>
          Embrace Diversity
        </h1>
        <br></br>
        <h4 className='text-white text-2xl'>
          At Köln City Cricket Club, diversity isnt just celebrated—its woven
          into the very fabric of our identity. Our club is a vibrant tapestry
          of cultures, with members hailing from all corners of the globe. From
          the bustling streets of India to the scenic landscapes of Pakistan,
          from the vibrant markets of Bangladesh to the rugged terrain of
          Afghanistan, and from the historic cities of England to the sun-kissed
          shores of Australia, our roster reflects the rich mosaic of cricketing
          traditions.
        </h4>
        <br />{' '}
        <h4 className='text-white text-2xl'>
          Our diverse backgrounds and experiences enrich every aspect of our
          club, fostering an atmosphere of inclusion, understanding, and mutual
          respect. Regardless of where you come from or what language you speak,
          Köln City Cricket Club welcomes you with open arms, united by our
          shared love for the game.
        </h4>
        <br />
        <h4 className='text-white text-2xl'>
          In embracing diversity, we not only celebrate the uniqueness of each
          individual but also harness the collective strength of our
          multicultural community. Together, we stand as living proof that
          cricket knows no boundaries—its a universal language that brings
          people together, transcending differences and forging lifelong bonds
          on and off the field{' '}
        </h4>{' '}
      </div>
      <div className='bg-gray-50 text-black h-1/2 w-full flex flex-col justify-around items-start p-20'>
        <h1 className='text-black text-transform: uppercase text-4xl'>
          Outdoor Training
        </h1>
        <br></br>
        <h4 className='text-black text-2xl'>
          When weather permits, our outdoor training sessions offer an
          unparalleled experience for players to refine their skills under the
          open sky. From batting on grass pitches to fielding drills on lush
          outfields, these sessions replicate match conditions, giving our
          members a competitive edge. Under the guidance of experienced coaches,
          players engage in activities aimed at enhancing their proficiency,
          tactical awareness, and fitness levels, fostering camaraderie and
          teamwork among teammates.
        </h4>
      </div>
      <div className='bg-black text-black h-1/2 w-full flex flex-col justify-around items-start p-20'>
        <h1 className='text-white text-transform: uppercase text-4xl ml-auto'>
          Indoor Training
        </h1>
        <br></br>
        <h4 className='text-white text-2xl'>
          At Köln City Cricket Club, we recognize the challenge posed by
          crickets dependency on weather conditions, particularly during colder
          months. To ensure consistent skill development and fitness, weve
          implemented a robust indoor training program. Our indoor sessions are
          meticulously structured, focusing on technical proficiency, tactical
          understanding, and physical conditioning. Utilizing top-notch
          facilities, our expert coaches guide players through a variety of
          drills and simulations, simulating real-game scenarios to sharpen
          cricketing acumen.
        </h4>
      </div>
      <div className='bg-gray-50 text-black h-1/2 w-full flex flex-col justify-around items-start p-20'>
        <h1 className='text-black text-transform: uppercase text-4xl'>
        Trained Coaching
        </h1>
        <br></br>
        <h4 className='text-black text-2xl'>
        At Köln City Cricket Club, our senior members are always available to provide guidance and support, 
        ensuring that every player receives individualized attention during training sessions. 
        We place a strong emphasis on skill improvement, with a focus on refining batting technique, bowling skills, fielding drills, catching practice, and running between the wickets. 
        Additionally, our commitment to player development extends to fitness, where we prioritize agility, presence of mind, and cricketing awareness through a strict fitness regimen.
        With the expertise of our experienced seniors and a dedication to holistic improvement, 
        Köln City Cricket Club fosters an environment where players can thrive both technically and physically, 
        empowering them to reach their full potential and excel on the cricket field.
        </h4>
      </div>
    </>
  );
}

export default AboutUsHero;
