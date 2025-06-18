import './rating.css';

export default function Rating({ value }) {
  const percentage = (value / 5) * 100;

  return (
    <div className="star-rating">
      <div className="stars-outer">
        <div className="stars-inner" style={{ width: `${percentage}%` }}></div>
      </div>
    </div>
  );
}
