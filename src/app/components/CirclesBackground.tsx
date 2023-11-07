const Circles = ({ count = 10 }) => {
    const circleItems = [];
    for (let i = 0; i < count; i++){
        circleItems.push(<li key={i}></li>);
    }

    return (
        <ul className="circles">{circleItems}</ul>
    );
};

export default Circles;