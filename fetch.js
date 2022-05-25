let url = 'https://augustojmnz.github.io/JSONapi/curriculum.json';

function loadInfo() {
    fetch(url)
        .then((response) => response.json())
        .then((data) => showData(data))
        .catch((error) => console.log(error));

    const showData = (data) => {
        console.log(data)
        let information = "";
        let about = "";
        let PersonalInformation = "";
        let AcademicFormation = "";
        let Skills = "";
        let Hobbiesandinterests = "";
        let Languages = "";
        let Workexperience = "";
        let References = "";

        information += `
        <h1>
            ${data[0].Name}
        </h1>
        `;
        about += `
        <p>
            ${data[0].About}
        </p>
        `;
        PersonalInformation += `
            <li>
                Date of birth: ${data[1].Dateofbirth}
            </li>
            <li>
                Nationality: ${data[1].Nationality}
            </li>
            <li>
                E-mail: ${data[1].email}
            </li>
            <li>
                Telephone number: ${data[1].Telephonenumber}
            </li>
            <li>
                Address: ${data[1].Address}
            </li>
        `;
        AcademicFormation += `
            <li>
            2020-In the present ${data[2].A2020Inthepresent}
            </li>
            <li>
            2017-2020: ${data[2].B20172020b}
            </li>
            <li>
            2014-2017: ${data[2].C20142017c}
            </li>
            <li>
            2008-2014: ${data[2].D20082014d}
            </li>
        `;
        Skills += `
            <li>${data[3].Communication}</li>
            <li>${data[3].Adaptability}</li>
            <li>${data[3].Teamwork}</li>
            <li>${data[3].Usingtechnologies}</li>
            <li>${data[3].Criticalthinking}</li>
            <li>${data[3].Identification}</li>
            <li>${data[3].Office}</li>
            <li>${data[3].Development}</li>
        `;
        Hobbiesandinterests += `
            <li>
                ${data[4].Reading}
            </li>
            <li>
                ${data[4].ContactSports}
            </li>
            <li>
                ${data[4].Training}
            </li>
            <li>
                ${data[4].ScienceTechnology}
            </li>
            <li>
                ${data[4].VideoGames}
            </li>
        `;
        Languages += `
            <li>
                Spanish: ${data[5].Spanish}
            </li>
            <li>
                English: ${data[5].English}
            </li>
        `;
        Workexperience += `
            <li>
                ${data[6].primero}
            </li>
            <li>
                ${data[6].segundo}
            </li>
        `;
        References += `
            <li>
                ${data[7].pri}
            </li>
            <li>
                ${data[7].seg}
            </li>
        `;
        document.getElementById('name').innerHTML = information;
        document.getElementById('ab').innerHTML = about;
        document.getElementById('personal').innerHTML = PersonalInformation;
        document.getElementById('acad').innerHTML = AcademicFormation;
        document.getElementById('sk').innerHTML = Skills;
        document.getElementById('HaI').innerHTML = Hobbiesandinterests;
        document.getElementById('lg').innerHTML = Languages;
        document.getElementById('wex').innerHTML = Workexperience;
        document.getElementById('ref').innerHTML = References;
    }
}

loadInfo();