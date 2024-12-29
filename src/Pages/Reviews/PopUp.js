import { Reviews } from "./Reviews";
import Logo from "../../Assets/Logo.png";
import { useClickOutside } from "../../Hooks/useClickOutside"

export function EmptyPopup({ setHidePopUp }) {
  const { ref } = useClickOutside(setHidePopUp)

  function togglePopUp() {
    if (setHidePopUp) {
      setHidePopUp(false);
    } else {
      console.error("setHidePopUp function is not provided!");
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen">
      {/* Popup Modal */}
      <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
        <div ref={ref} className="bg-white p-6 rounded-lg shadow-lg w-96">
          <div className="flex justify-between items-center mb-2">
            <div className="flex flex-wrap items-center flex-shrink-0">
              <img className="h-full w-[2.5rem] rounded-full" src={Logo} alt="Logo" />
              <span className="md:text-md text-2xl font_style">Gaming.<span className="text-purple-900 font-extrabold">Tech</span></span>
            </div>
            <span onClick={togglePopUp} className="text-xl cursor-pointer">X</span>
          </div>
          <div>
            <Reviews setHidePopUp={setHidePopUp}/>
          </div>
        </div>
      </div>
    </div>
  );
}
