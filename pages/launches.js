import Layout from "../components/layout";

function LaunchesPage({ data }) {
  return (
    <Layout>
      <div class="flex flex-col">
        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table class="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                      Mission
                    </th>
                    <th class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                      Launch Date
                    </th>
                    <th class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                      Launch Site
                    </th>
                    <th class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                      Article
                    </th>
                    <th class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                      Video
                    </th>

                    <th class="px-6 py-3 bg-gray-50"></th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                  {data.launches.map((launch) => (
                    <tr>
                      <td class="px-6 py-4 whitespace-no-wrap">
                        <div class="flex items-center">
                          <div class="flex-shrink-0 h-10">
                            <img
                              class="h-10 rounded-full"
                              src={launch.links.mission_patch}
                              alt=""
                            ></img>
                          </div>
                          <div class="ml-4">
                            <div class="text-sm leading-5 font-medium text-gray-900">
                              {launch.mission_name}
                            </div>
                            <div class="text-sm leading-5 text-gray-500">
                              {launch.rocket.rocket_name}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td class="px-6 py-4 whitespace-no-wrap">
                        <div class="text-sm leading-5 text-gray-900">
                          {launch.launch_date_utc}
                        </div>
                      </td>
                      <td class="px-6 py-4 whitespace-no-wrap">
                        <div class="text-sm leading-5 text-gray-900">
                          {launch.launch_site.site_name}
                        </div>
                      </td>
                      <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium">
                        <a href={launch.links.article_link}>Link</a>
                      </td>
                      <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium">
                        <a href={launch.links.article_link}>Link</a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

LaunchesPage.getInitialProps = async (ctx) => {
  const res = await fetch("https://api.spacexdata.com/v3/launches");
  const json = await res.json();

  return {
    data: {
      launches: json,
    },
  };
};
export default LaunchesPage;
