import { DetailedHTMLProps, HTMLAttributes, useState, useEffect, KeyboardEvent } from 'react';
import RatingIcon from './rating.svg';
import styles from './Rating.module.css';
import cn from 'classnames';

export interface RatingProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  isEditable?: boolean;
  rating: number;
  setRating?: (rating: number) => void;
}

export const Rating = ({
  rating,
  isEditable = false,
  setRating,
  ...props
}: RatingProps): JSX.Element => {
  // ! useState
  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

  // * FUNCTION constructRatiing
  const constructRatiing = (currentRating: number) => {
    const updatedArray = ratingArray.map((r: JSX.Element, idx: number) => {
      return (
        <span
          key={idx}
          className={cn(styles.star, {
            [styles.filled]: idx < currentRating,
            [styles.editable]: isEditable,
          })}
          onMouseEnter={() => changeDisplay(idx + 1)}
          onMouseLeave={() => changeDisplay(rating)}
          onClick={() => onClick(idx + 1)}>
          <RatingIcon
            tabIndex={isEditable ? 0 : -1}
            onKeyDown={(e: KeyboardEvent<SVGElement>) => isEditable && handleSpace(idx + 1, e)}
          />
        </span>
      );
    });
    setRatingArray(updatedArray);
  };

  // * FUNCTION changeDisplay
  const changeDisplay = (idx: number) => {
    if (!isEditable) {
      return;
    }
    constructRatiing(idx);
  };

  // * FUNCTION onClick
  const onClick = (idx: number) => {
    if (!isEditable || !setRating) {
      return;
    }
    setRating(idx);
  };

  // * FUNCTION handleSpace
  const handleSpace = (idx: number, e: KeyboardEvent<SVGElement>) => {
    if (e.code !== 'Space' || !setRating) {
      return;
    }
    setRating(idx);
  };

  // ! useEffect
  useEffect(() => {
    constructRatiing(rating);
  }, [rating]);

  return (
    <div {...props}>
      {ratingArray.map((r, idx) => (
        <span key={idx}>{r}</span>
      ))}
    </div>
  );
};

export default Rating;
