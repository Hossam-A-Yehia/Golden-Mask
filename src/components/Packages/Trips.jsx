import CardTrip from "../CardTrip";
import IMG1 from "../../assets/Packages/package1.png";
export default function Trips() {
  return (
    <div className=" col-span-3 lg:col-span-2">
      <div className="flex items-center justify-between flex-wrap">
        <CardTrip img={IMG1} packages />
        <CardTrip img={IMG1} packages />
        <CardTrip img={IMG1} packages />
        <CardTrip img={IMG1} packages />
      </div>
    </div>
  );
}
