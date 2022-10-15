import React from "react";

interface Props {
  title: string;
}

const Details = ({ title }: Props) => {
  return (
    <div className="section">
        <div>
      <p className="about">About</p>
      <h2>{title}</h2>
    
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione
            consequatur, similique nesciunt officiis aspernatur modi ea.
            Voluptates molestias iste maiores ipsam, aspernatur corrupti dolores
            magnam accusantium veniam beatae amet delectus laudantium obcaecati
            facilis ut consequatur enim. Facere sequi deleniti modi maxime nobis
            veniam, natus officiis porro quidem asperiores, quod molestiae.
          </p>
          </div>
          {title === "Stories of Adventure" ? (
        <>
          <img
            className="circle-img"
            src="https://i.picsum.photos/id/1006/3000/2000.jpg?hmac=x83pQQ7LW1UTo8HxBcIWuRIVeN_uCg0cG6keXvNvM8g"
            alt=""
          />
        </>
      ) : (
        <>
          <img
            className="circle-img"
            src="https://i.picsum.photos/id/1011/5472/3648.jpg?hmac=Koo9845x2akkVzVFX3xxAc9BCkeGYA9VRVfLE4f0Zzk"
            alt=""
          />
        </>
      )}
    </div>
  );
};

export default Details;
