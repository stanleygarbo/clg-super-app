const Vision = () => {
  return (
    <div className="flex h-[600px] justify-evenly py-20">
      <article>
        <h1 className="text-[40px] text-center">Vision</h1>
        <p className="text-[20px] text-wrap text-start">
          To be the leader and dominant provider of relevant globally recognized
          information technology-based education and related services in the
          global market.
        </p>
      </article>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/0eaqOCzGEh4?si=p6OqhLqTIZ6033mb"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Vision;
