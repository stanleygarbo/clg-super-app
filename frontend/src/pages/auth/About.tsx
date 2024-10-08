const About = () => {
  return (
    <div className="p-10 pt-28 flex flex-col justify-evenly">
      <h1 className="px-[10rem] my-10 text-4xl font-bold">
        About
        <img src="/line-thin.svg" className="w-[100px]" alt="" />
      </h1>
      <div className="px-[10rem]">
        <p className="text-warp ">
          ACLC College is a member of the AMA Education System and is one of the
          leading computer schools in the country. With a curriculum that is
          based on the requirements of the actual industry, ACLC College aims to
          produce highly competent graduates, especially in the field of IT and
          other fields that require knowledge in today's technology.
        </p>
        <br />

        <p className="text-warp">
          AMA Computer Learning Center (ACLC) is a leading computer training
          institution in the country offering full 2-year programs and
          short-term courses. It is focused on producing highly competent and
          skilled graduates to address the growing needs of the local and
          international markets. ACLC offers the most complete and up-to-date
          curriculum to equip students with the necessary skills to pursue an IT
          career. It also has international affiliations that allow ACLC
          graduates to get high paying jobs and continuous promotions.
        </p>
      </div>

      <div className=" flex flex-col m-auto items-center py-10">
        <img
          src="./chair_03.png"
          alt=""
          className=" rounded-full border-2 border-red-500 shadow-xl hover:scale-[1.05] transition-all "
        />
        <p className="pb-10 pt-6 opacity-50">
          Dr. Amable R. Aguiluz V, Chairman
        </p>

        <article className="px-[10rem]">
          We live in this period of human history where the whole world is right
          at our fingertips. The advent of computers has changed our lives and
          keeps changing the way we live. We now find ourselves in this
          transitory stage of social evolution where knowledge workers have
          become the most valuable capital of nations in the global village.
          This is the Age of Information. This is the Age of Technology. This is
          the Age of Knowledge. <br /> <br /> In the years to come, the shift
          from traditional modes of learning to what we may tentatively call
          “blended learning” will become more pronounced. All our campuses and
          branches have started utilizing online instruction or e-learning,
          making education more accessible anytime, anywhere. As the pioneer of
          online education, we shall soon venture into the establishment of the
          global online university. Our expansion plans, therefore, are
          three-pronged. First, physical expansion by establishing other
          campuses abroad. <br /> <br /> Second, virtual expansion by dominating
          cyber space through online education. Third, internal expansion by
          opening new branches in the Philippines. We remain steadfast in our
          commitment to produce globally competitive knowledge workers and we
          shall continue creating the demand for competent ICT manpower in the
          world market. (Excerpts from the Investiture Address of Dr. Amable R.
          Aguiluz V, First President of AMA Computer University, 5 February
          2002, 6:30 pm, PICC Reception Hall)
        </article>
      </div>
      <div className=" flex flex-col m-auto items-center py-10">
        <img
          src="./pres_03.png"
          alt=""
          className=" rounded-full border-2 border-red-500 shadow-xl hover:scale-[1.05] transition-all "
        />
        <p className="pb-10 pt-6 opacity-50">
          Dr. Amable C. Aguiluz IX, Vice Chairman
        </p>

        <article className="px-[10rem]">
          One of the many challenges that we at AMAES is constantly faced with
          is competition. Global changes put pressure on how we develop and
          produce graduates who are relevant and in demand in today’s workforce.
          I am proud to say that we have been able to stay true to our
          commitment and more so, we have able to prepare and plan for the
          changes that come our way. We not only remain confident of what we
          have been able to achieve in the past but continue to advance our
          pursuits. There are varied stories of success and achievement of our
          alumna. <br /> <br /> Each has followed his own individual path and
          yet each one still goes back to his roots --- his alma matter, AMA
          Computer College. The institution helps mold individuals who are
          expected to succeed in their chosen career. We encourage students to
          become positive thinkers who can recognize and translate challenges
          into results. They are pushed to become innovators who can embrace
          learning and create new ways to achieve sustainable growth and
          superiority. Our passion and vision for the organization are matched
          with our officers, staff and faculty members’ dedication and
          willingness to take on our goals at heart and to carry out our
          objectives that will trickle down to all our stakeholders --- our
          students. <br /> <br /> We at AMA Education System all share the same
          vision of remaining the largest pioneer in IT-based education with
          campuses not only throughout the country’s archipelago but continue to
          make our presence in other regions as well. We are AMA Education
          System and we shall stay strong in doing what we do best --- providing
          quality education to all.
        </article>
      </div>

      <div className="flex flex-row justify-evenly px-[5rem] pt-10 w-[100%] h-[400px] ">
        <div className="shadow-xl rounded-xl p-5 w-[500px] h-[300px] hover:scale-[1.05] transition-all">
          <h1 className="font-bold text-center pb-3">MISSION</h1>
          <article>
            To provide a holistic, relevant, quality and globally recognized
            IT-based education in all levels and disciplines with the objective
            of producing professionals and leaders responsive to the needs of
            Science and the international community cognizant of the welfare and
            benefits of its men and women thereby realizing their potential as
            productive members of the society for the honor and glory of God
            Almighty.
          </article>
        </div>

        <div className=" shadow-xl rounded-xl p-5 w-[500px] h-[300px] hover:scale-[1.05] transition-all">
          <h1 className="font-bold text-center pb-3">VISION</h1>
          <article>
            To be the leader and dominant provider of relevant globally
            recognized information technology-based education and related
            services in the global market.
          </article>
        </div>
      </div>
    </div>
  );
};

export default About;
