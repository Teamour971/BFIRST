script.js
<script src="Chart.min.js"></script>


// Fonction pour simuler la mise à jour des données
function updateDashboard() {
    // Simuler une récupération des données (via une API, par exemple)
    const followers = 1250;
    const posts = 572;
    const engagementRate = 9.1;
    const impressions = 16789;

    // Mise à jour des éléments du DOM avec les nouvelles valeurs
    document.getElementById('followers').textContent = followers;
    document.getElementById('posts').textContent = posts;
    document.getElementById('engagement-rate').textContent = engagementRate + '%';
    document.getElementById('impressions').textContent = impressions;
}

// Appeler la fonction pour mettre à jour les données
updateDashboard();
// Ajouter ce code dans `script.js`
const ctx = document.getElementById('followersChart').getContext('2d');
const followersChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'],
        datasets: [{
            label: 'Abonnés',
            data: [1200, 1220, 1235, 1240, 1250, 1260, 1270],
            backgroundColor: 'rgba(0, 123, 255, 0.2)',
            borderColor: 'rgba(0, 123, 255, 1)',
            borderWidth: 2,
            fill: true
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: false
            }
        }
    }
});
