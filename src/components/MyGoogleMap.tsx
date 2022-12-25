import "../css/MyGoogleMap.css";

const MyGoogleMap: React.FC = () => {
  return (
    <div id="map" className="mapWrapper">
      <iframe
        className="map"
        src="https://www.google.com/maps/d/u/0/embed?mid=1Aacfo7BKRRoVYiq7xl16vJmUpCNTK88"
        title="map"
      ></iframe>
    </div>
  );
};

export default MyGoogleMap;
