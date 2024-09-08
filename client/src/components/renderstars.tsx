import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faStarHalfAlt,
  faStar as faStarEmpty,
} from "@fortawesome/free-solid-svg-icons";

interface renderStarProps {
  rating: number;
}

const stars = (rating: number) => {
  const fullstar = Math.floor(rating);
  const halfstar = rating % 1 >= 0.5 ? 1 : 0;
  const emptystar = 5 - fullstar - halfstar;
  return [fullstar, halfstar, emptystar];
};

const RenderStars: React.FC<renderStarProps> = ({ rating }) => {
  const [fullstar, halfstar, emptystar] = stars(rating);
  return (
    <div>
      {[...Array(fullstar)].map((_, i) => (
        <FontAwesomeIcon
          key={`full-${i}`}
          icon={faStar}
          className="text-yellow-500 w-6 h-6"
        />
      ))}
      {halfstar === 1 && (
        <FontAwesomeIcon
          key="half"
          icon={faStarHalfAlt}
          className="text-yellow-500 w-6 h-6"
        />
      )}
      {[...Array(emptystar)].map((_, i) => (
        <FontAwesomeIcon
          key={`empty-${i}`}
          icon={faStarEmpty}
          className="text-gray-300 w-6 h-6"
        />
      ))}
    </div>
  );
};

export default RenderStars;
