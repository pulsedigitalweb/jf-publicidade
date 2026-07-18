/* Reviews */

document.addEventListener("DOMContentLoaded", () => {

    const googleReviews = [
        {
            name:"Marcos Silva",
            rating:5,
            date:"Há 2 semanas",
            text:"Excelente atendimento e ótima qualidade no serviço. A equipe foi muito atenciosa durante toda a ação."
        },
        {
            name:"Ana Souza",
            rating:5,
            date:"Há 1 mês",
            text:"Serviço realizado com profissionalismo, pontualidade e uma excelente estrutura de som."
        },
        {
            name:"Carlos Oliveira",
            rating:4,
            date:"Há 2 meses",
            text:"Ótimo atendimento e divulgação muito bem realizada. Recomendo os serviços da JF Publicidade."
        }
    ];

    const reviewsGrid = document.querySelector("#reviews-grid");
    const reviewsEmpty = document.querySelector("#reviews-empty");
    const reviewsRating = document.querySelector("#reviews-rating");
    const reviewsTotal = document.querySelector("#reviews-total");
    const reviewsStars = document.querySelector("#reviews-stars");

    if(!reviewsGrid || !reviewsEmpty || !reviewsRating || !reviewsTotal || !reviewsStars){
        console.error("Não foi possível encontrar os elementos da seção de avaliações.");
        return;
    }

    function createStars(rating){

        let stars = "";

        for(let i = 1; i <= 5; i++){

            if(i <= Math.round(rating)){
                stars += '<i class="fa-solid fa-star"></i>';
            }else{
                stars += '<i class="fa-regular fa-star"></i>';
            }

        }

        return stars;

    }

    function renderReviews(reviews){

        if(reviews.length === 0){

            reviewsGrid.innerHTML = "";
            reviewsGrid.style.display = "none";
            reviewsEmpty.style.display = "flex";

            reviewsRating.textContent = "0.0";
            reviewsTotal.textContent = "Nenhuma avaliação no momento";
            reviewsStars.innerHTML = createStars(0);

            return;

        }

        reviewsGrid.style.display = "grid";
        reviewsEmpty.style.display = "none";

        const totalRating = reviews.reduce((total, review) => {
            return total + review.rating;
        }, 0);

        const averageRating = totalRating / reviews.length;

        reviewsRating.textContent = averageRating.toFixed(1);
        reviewsTotal.textContent = `${reviews.length} avaliações no Google`;
        reviewsStars.innerHTML = createStars(averageRating);

        reviewsGrid.innerHTML = reviews.map(review => {

            const firstLetter = review.name.charAt(0).toUpperCase();

            return `
                <article class="review-card">

                    <div class="review-author">

                        <div class="review-avatar">${firstLetter}</div>

                        <div>
                            <h3>${review.name}</h3>
                            <span>${review.date}</span>
                        </div>

                    </div>

                    <div class="reviews-stars">
                        ${createStars(review.rating)}
                    </div>

                    <p>${review.text}</p>

                </article>
            `;

        }).join("");

    }

    renderReviews(googleReviews);

});