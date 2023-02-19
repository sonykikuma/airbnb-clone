import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useRouter } from "next/router";
import { format } from "date-fns";
import InfoCard from "../components/InfoCard";
//import Maps from "../components/Map";

const Search = ({ searchResults }) => {
  const router = useRouter();

  console.log(searchResults);
  let { location, startDate, endDate, noOfGuests } = router.query;

  const formattedStartDate = startDate
    ? format(new Date(startDate), "dd MMMM yy")
    : "";
  const formattedEndDate = endDate
    ? format(new Date(endDate), "dd MMMM yy")
    : "";
  const range = `${formattedStartDate} - ${formattedEndDate}`;

  //location = location.charAt(0).toUpperCase() + location.slice(1);

  console.log(router.query);

  return (
    <div>
      <Header placeholder={`${location} | ${range} | ${noOfGuests} guests`} />

      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">
            300+ stays - {range} - for {noOfGuests} guests
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stays in {location}{" "}
          </h1>
          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Type of Place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More Filters</p>
          </div>

          <div className="flex flex-col">
            {" "}
            {searchResults.map(
              ({ img, description, title, star, price, location, total }) => (
                <InfoCard
                  key={img}
                  img={img}
                  description={description}
                  title={title}
                  star={star}
                  price={price}
                  location={location}
                  total={total}
                />
              )
            )}
          </div>
        </section>

        <section className="hidden xl:inline-flex xl:min-w-[600px]"></section>
      </main>
      <Footer />
    </div>
  );
};

export default Search;

export async function getServerSideProps() {
  const searchResults = await fetch("https://www.jsonkeeper.com/b/5NPS").then(
    (res) => res.json()
  );

  //https://links.papareact.com/isz")

  return {
    props: {
      searchResults,
    },
  };
}
// line 67           <Maps searchResults={searchResults} />
