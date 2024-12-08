import { useEffect } from "react";
import "./circle.css";

// Importing TagCloud package
import TagCloud from "TagCloud";

const LogoCircle = () => {
  // Animation settings for Text Cloud
  useEffect(() => {
    return () => {
      const container = ".tagcloud";
      const texts = [
        "OTR",
        "CLF",
        "Park Street",
        "Pernod Richard",
        "Sans",
        "Brown Forman",
        "BACARDI",
        "PALM BAY",
        "AIRWAYS",
        "UNITED",       
        "Clearfreight",       
        "dibbleup",       
        "DAVOS",       
        "JimDeam",       
      ];

      const options = {
        radius: 300,
        maxSpeed: "slow",
        initSpeed: "slow",
        keep: true,
      };

      TagCloud(container, texts, options);
    };
  }, []);

  return (
    <>
      <div className="text-shpere">
        {/* span tag className must be "tagcloud"  */}
        <span className="tagcloud"></span>
      </div>
    </>
  );
};

export default LogoCircle;