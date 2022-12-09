document.addEventListener("DOMContentLoaded", function () {
  let powerStatus = true;
  document
    .querySelector("#handlePower")
    .addEventListener("click", async function () {
      const powerMap = {
        true: "ON",
        false: "OFF",
      };

      const sendPower = async (status) => {
        return await fetch(
          `https://scary-calf-hat.cyclic.app/wled?token=e0f79dd5-a6de-4e11-9bdf-717fede9ab2d&func=${status}`
        );
      };

      const label = powerMap[powerStatus.toString()];
      await sendPower(label);
      const response = await sendPower(label);
      alert(JSON.stringify(response));
      powerStatus = !powerStatus;
    });
});
