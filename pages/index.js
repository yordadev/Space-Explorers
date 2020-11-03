import Layout from "../components/layout";

function RoadsterPage({ data }) {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center">
        <div class="max-w-sm w-full lg:max-w-full lg:flex">
          <div class="h-48 lg:h-auto lg:w-auto flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"></div>
          <div class="border-t border-r border-b border-l border-gray-400 lg:border-l-   lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
            <div class="mb-3">
              <p class="text-sm text-gray-600 flex items-center">
                <img
                  src="https://logos-download.com/wp-content/uploads/2016/03/Tesla_logo_silver.png"
                  className="w-10 mr-3 text-white"
                />
                {data.name}
              </p>
              <div class="text-gray-900 font-bold text-xl mb-2">
                What and where is the roadster right meow?
              </div>
              <p class="text-gray-700 text-base">{data.details}</p>
            </div>

            <div class="px-4 py-5 border-b border-gray-200 sm:px-6">
              <h3 class="text-lg leading-6 font-medium text-gray-900">
                Roadster Information
              </h3>
              <p class="mt-1 max-w-2xl text-sm leading-5 text-gray-500">
                General details and information regarding the Tesla Roadster and
                its position.
              </p>
            </div>
            <div>
              <dl>
                <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt class="text-sm leading-5 font-medium text-gray-500">
                    Orbit Type
                  </dt>
                  <dd class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                    {data.orbit}
                  </dd>
                </div>
                <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt class="text-sm leading-5 font-medium text-gray-500">
                    Mass at Launch
                  </dt>
                  <dd class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                    {data.mass_lbs} Lbs / {data.mass_kg} Kg
                  </dd>
                </div>
                <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt class="text-sm leading-5 font-medium text-gray-500">
                    Distance From Earth
                  </dt>
                  <dd class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                    {data.earth_distance_mi
                      .toFixed(2)
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                    Mi /{" "}
                    {data.earth_distance_km
                      .toFixed(2)
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                    Km
                  </dd>
                </div>
                <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt class="text-sm leading-5 font-medium text-gray-500">
                    Distance From Mars
                  </dt>
                  <dd class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                    {data.mars_distance_mi
                      .toFixed(2)
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                    Mi /{" "}
                    {data.mars_distance_km
                      .toFixed(2)
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                    Km
                  </dd>
                </div>
                <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt class="text-sm leading-5 font-medium text-gray-500">
                    Current Speed
                  </dt>
                  <dd class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                    {data.speed_mph
                      .toFixed(2)
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                    Mph /{" "}
                    {data.speed_kph
                      .toFixed(2)
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                    Kph
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

RoadsterPage.getInitialProps = async (ctx) => {
  const res = await fetch("https://api.spacexdata.com/v3/roadster");
  const json = await res.json();

  return {
    data: {
      name: json.name,
      details: json.details,
      orbit: json.orbit_type,
      launched: json.launch_date_utc,
      mass_kg: json.launch_mass_kg,
      mass_lbs: json.launch_mass_lbs,
      earth_distance_km: json.earth_distance_km,
      earth_distance_mi: json.earth_distance_mi,
      mars_distance_km: json.mars_distance_km,
      mars_distance_mi: json.mars_distance_mi,
      speed_kph: json.speed_kph,
      speed_mph: json.speed_mph,
    },
  };
};

export default RoadsterPage;
