(function(){
    "use strict";

    // let planetsString = Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    //     let planetsArray;
    //
    const planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */
      const planetsArray = planetsString.split ("|")
    //const not necessary here
    console.log(planetsArray);
    // ==================

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an unordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */

    const planetsString2 = "Mercury<br>Venus<br>Earth<br>Mars<br>Jupiter<br>Saturn<br>Uranus<br>Neptune";
    console.log(planetsString2)

    //This would allow the string to be displayed vertically in a html web browser.
    let planetsString22 = planetsArray.join('<br>');
    console.log(planetsString22);

    const planetsString3 = "<ul><li>Mercury</li><li>Venus</li><li>Earth</li><li>Mars</li><li>Jupiter</li><li>Saturn</li><li>Uranus</li><li>Neptune</li></ul>"
    console.log(planetsString3)

let planetsString33 = `<ul>
    <li>${planetsArray.join(`</li>
    <li>`)}</li>
</ul>`;

console.log(planetsString33)

})();
