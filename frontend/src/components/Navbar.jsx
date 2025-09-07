import { useApiStore } from "../store/apistore";

const Navbar = () => {
  const user = useApiStore((s) => s.user);

  let firstName;
  let logo;

  if (user) {
    const words = user.fullName.split(" ").filter(Boolean);
    firstName = words[0];
    logo =
      words.length === 1
        ? words[0][0].toUpperCase()
        : (words[0][0] + words[1][0]).toUpperCase();
  } else {
    firstName = "Librarian";
    logo = "LP";
  }

  return (
    <nav className="bg-gray-800 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold text-teal-400">BookTrackr</div>
        <div className="flex items-center space-x-4">
          <span className="text-sm hidden sm:inline text-gray-400">
            {`${firstName}'s portal`}
          </span>
          <div className="w-8 h-8 rounded-full bg-teal-500 flex items-center justify-center text-white font-bold">
            {logo}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
