import React from "react";

const UsersList = ({ users }) => {

    // give a color to each user
    const color = ["green", "blue", "red", "yellow"];

  return (
    <div>
      <section class="antialiased bg-gray-200 font-anak py-4 flex flex-col rounded-2xl w-full">
        {users.map((user,i) => {
          return (
            <div key={i} class="mx-auto my-2 space-y-6 w-11/12">
              <div class={`pl-1 w-full h-16 bg-${color[i%4]}-400 rounded-lg shadow-md cursor-pointer`}>
                <div class="flex w-full h-full py-2 px-4 bg-white rounded-lg justify-between">
                  <div class="my-auto">
                    <p class="font-bold font-anak">{user.name}</p>
                    <p class="text-sm font-anak">{user.email}</p>
                  </div>
                  <div class="my-auto">
                  <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                        
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default UsersList;
