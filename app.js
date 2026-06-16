const searchForm = document.querySelector("#search-form");
const tripsForm = document.querySelector("#trips-form");
const tripsList = document.querySelector("#trips-list");
const textGrey = document.querySelector("#text-grey");
const moretrips = document.querySelector("#more-trips");
const tripsformgrid = document.querySelector("dialog");
const btnblock = document.querySelector("#add-trips");

const url = "http://10.69.4.8:3000/v1/trips";
let Page = 1;

async function GetTrips(url) {
	const formdata = new FormData(searchForm);
	const departure = formdata.get("departure");
	const arrival = formdata.get("arrival");

	const response = await fetch(
		`${url}?departure=${departure}&arrival=${arrival}&page=${Page}`,
		{
			method: "GET",
			headers: {
				authorization: "Bearer 123",
			},
		},
	);
	const data = await response.json();
	console.log(data);

	for (let i = 0; i < data.length; i++) {
		tripsList.innerHTML += `<div class="trips-card">
						<img class="trips-card-img" src="${data[i].cover}" alt="lille" />
						<div class="trips-card-content">
							<div class="trips-card-route">
								<div class="trips-card-routing">
									<svg
										width="17"
										height="60"
										viewBox="0 0 17 60"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M16.3635 8.18182C16.3635 11.7545 14.0999 14.7818 10.909 15.9L10.909 44.1C14.0999 45.2182 16.3635 48.2455 16.3635 51.8182C16.3635 53.9881 15.5015 56.0692 13.9671 57.6036C12.4327 59.138 10.3517 60 8.18171 60C6.01175 60 3.93068 59.138 2.39629 57.6036C0.861898 56.0692 -0.000110626 53.9881 -0.000110626 51.8182C-0.000110626 48.2455 2.26353 45.2182 5.45443 44.1L5.45443 15.9C2.26353 14.7818 -0.000110626 11.7545 -0.000110626 8.18182C-0.000110626 6.01186 0.861898 3.93079 2.39629 2.3964C3.93068 0.862011 6.01175 0 8.18171 0C10.3517 0 12.4327 0.862011 13.9671 2.3964C15.5015 3.93079 16.3635 6.01186 16.3635 8.18182Z"
											fill="#001536"
										/>
									</svg>
									<div class="trips-card-cities">
										<p>${data[i].departure}</p>
										<p>${data[i].arrival}</p>
									</div>
								</div>
								<div class="trips-card-duration">
									<p>Durée</p>
									<p>${data[i].durationHours} h ${data[i].durationMinutes}</p>
								</div>
							</div>
							<hr />
							<div class="trips-card-append">
								<div class="trips-card-price">
									<h6>Dès</h6>
									<span>
										<h3>${data[i].price}</h3>
										<h3>€</h3>
									</span>
								</div>
								<button class="btn trips-btn">
									<svg
										width="16"
										height="16"
										viewBox="0 0 16 16"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M0 6.92V8.92H12L6.5 14.42L7.92 15.84L15.84 7.92L7.92 0L6.5 1.42L12 6.92H0Z"
											fill="white"
										/>
									</svg>
								</button>
							</div>
						</div>
					</div>`;
	}
}


async function PostTrips(url) {
	const formdata2 = new FormData(tripsForm);
	const departure2 = formdata2.get("departure");
	const arrival2 = formdata2.get("arrival");
	const durationhours2 = formdata2.get("durationhours");
	const durationminutes2 = formdata2.get("durationminutes");
	const price2 = formdata2.get("price");

	const response = await fetch(
		`${url}?departure=${departure2}&arrival=${arrival2}&page=1`,
		{
			method: "POST",
			headers: {
				authorization: "Bearer 123",
			},
		},
	);
	const data = await response.json();
	console.log(data);


}

searchForm.addEventListener("submit", async (e) => {
	e.preventDefault();
	Page = 1;
	GetTrips(url);
	tripsList.innerHTML = "";
	textGrey.style.display = "none";
	moretrips.style.display = "flex"
});

moretrips.addEventListener("click", async () => {
	Page++;
	GetTrips(url);
});

moretrips.addEventListener("click", async () => {
     GetTrips(url)
	 console.log(url);
	 
})

btnblock.addEventListener("click", async () => {
	tripsformgrid.setAttribute("open");
}) 



