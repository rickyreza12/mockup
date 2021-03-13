// get data class and id
let months = document.getElementById("monthly");
let htitle = document.getElementById("htitle");
let month = document.getElementById("bulan");
let modal = document.getElementById("modalemployee");

let header = document.getElementsByClassName("headervalue")[0];
let footer = document.getElementsByClassName("footervalue")[0];
let body = document.getElementsByClassName("modal-body")[0];

let table = "";
let result = "";
let fortitle = "";
let allvalue = alldata.length;

month.innerHTML = `${alldata[0].month_name}`;

htitle.innerHTML = `${alldata[0].days + 1} - ${
  alldata[allvalue - 1].days + 1
} ${alldata[0].month_name}`;

// showing into div
console.log(alldata.length);
alldata.map((element, index) => {
  table = `<table border="1" id="vito">
                  <thead>
                    <tr>
                      <th colspan="6">${element.days_name} ${
    element.days + 1
  } ${element.month_name} ${element.year}</th>
                    </tr>
                    <tr>
                      <th style="width:100px">Program</th>
                      <th style="width: 50px">Cam</th>
                      <th style="width: 50px">Lig</th>
                      <th style="width: 50px">Aud</th>
                      <th style="width: 50px">CRP</th>
                      <th style="width: 50px">TP</th>
                    </tr>
                  </thead>
                  <tbody class="program">`;

  let everyprog = "";
  let styles = "";

  element.program.map((value, index) => {
    // if (value.title == "Mantrix") {
    //   styles = `style="background-color: #2f84c9;"`;
    // } else {
    //   styles = ``;
    // }
    everyprog += `<tr ${styles}>
                      <td>${value.title}</td>
                      <td class="cameraperson""><span class="coba" onclick="helo('${JSON.stringify(
                        value.cam.crew
                      )
                        .split('"')
                        .join("&quot;")}')">${
      value.cam.crew.length == 0 ? " " : value.cam.crew.length
    }</span></td>
                      <td class="cameraperson""><span class="coba" onclick="helo('${JSON.stringify(
                        value.lig.crew
                      )
                        .split('"')
                        .join("&quot;")}')">${
      value.lig.crew.length == 0 ? " " : value.lig.crew.length
    }</td>
                      <td class="cameraperson""><span class="coba" onclick="helo('${JSON.stringify(
                        value.aud.crew
                      )
                        .split('"')
                        .join("&quot;")}')">${
      value.aud.crew.length == 0 ? " " : value.aud.crew.length
    }</td>
                      <td class="cameraperson""><span class="coba" onclick="helo('${JSON.stringify(
                        value.crp.crew
                      )
                        .split('"')
                        .join("&quot;")}')">${
      value.crp.crew.length == 0 ? " " : value.crp.crew.length
    }</td>
                      <td class="cameraperson""><span class="coba" onclick="helo('${JSON.stringify(
                        value.tp.crew
                      )
                        .split('"')
                        .join("&quot;")}')">${
      value.tp.crew.length == 0 ? " " : value.tp.crew.length
    }</td></tr>
                  `;
  });

  let needed = `<tr style="background-color: rgb(228, 144, 19);">
  <td>Kebutuhan</td>
  <td>28</td>
  <td>10</td>
  <td>12</td>
  <td>13</td>
  <td>2</td>
  </tr>
  <tr>
  <td >Jumlah Kru</td>
  <td>41</td>
  <td>14</td>
  <td>18</td>
  <td>19</td>
  <td>5</td>
  </tr>
  <td>Quota</td>
  <td>13</td>
  <td>4</td>
  <td>6</td>
  <td>6</td>
  <td>3</td>
  </tr>
  `;

  let ending = `</tbody>
                </table>`;
  result += table + everyprog + needed + ending;
});

months.innerHTML = result;

function helo(vallue) {
  let newValue = JSON.parse(vallue);
  let inbody = "";

  modal.style.display = "block";
  console.log(newValue[0].occupation);

  newValue.forEach((element) => {
    console.log(element);
    inbody += `
    <p style="text-align: left;">
    Nik : ${element.nik} <br>
    Nama: ${element.nama} <br>
    Department: ${element.department} <br>
    Occupation: ${element.occupation} <br>
    </p>`;
  });

  body.innerHTML = `<br> On Duty <br> ${inbody} <br>`;
  header.innerHTML = `${newValue[0].occupation}`;
  footer.innerHTML = `TRANS 7`;
}

let span = document.getElementsByClassName("close")[0];

span.onclick = function () {
  header.innerHTML = `Occupation`;
  body.innerHTML = `<p>No One On Duty</p>
          <p>Please try again...</p>`;
  footer.innerHTML = `TRANS 7`;
  modal.style.display = "none";
};

let advansearch = document.getElementById("search");
let displayedsearch = document.getElementById("displayedsearch");
advansearch.onclick = function () {
  displayedsearch.style.display == "flex"
    ? (displayedsearch.style.display = "none")
    : (displayedsearch.style.display = "flex");
};
