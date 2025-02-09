// Show Creator Account form
function showCreatorForm() {
    // Reset main content and show Creator Account form
    document.getElementById("creatorForm").style.display = "block";
    document.getElementById("investorForm").style.display = "none";
    document.getElementById("creatorIdeas").style.display = "none";
    resetPage();
  }
  
  // Show Investor Account form
  function showInvestorForm() {
    // Reset main content and show Investor Account form
    document.getElementById("creatorForm").style.display = "none";
    document.getElementById("investorForm").style.display = "block";
    document.getElementById("creatorIdeas").style.display = "none";
    resetPage();
  }
  
  // Reset to initial page state
  function resetPage() {
    const messageModal = document.getElementById("messageModal");
    
    if (messageModal.style.display === "block") {
      closeMessageModal(); // Close message modal if open
    }
    
    // Show the main creator ideas section
    document.getElementById("creatorIdeas").style.display = "block";
  }
  
  // Show the message modal
  function openMessageModal(creatorName) {
    document.getElementById("creatorNameText").innerText = creatorName;
    document.getElementById("messageModal").style.display = "block";
  }
  
  // Close the message modal
  function closeMessageModal(event) {
    if (event && event.target === document.getElementById("messageModal")) {
      document.getElementById("messageModal").style.display = "none";
    }
  }
  
  // Send the message
  function sendMessage(mail) {
    const message = document.getElementById("messageText").value;
    const subject = "Message from Investor";
    
    // Encode message and subject to be URL-safe
    const mailtoLink = `mailto:${mail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
    
    // Open the mail client
    window.location.href = mailtoLink;

    // Close the modal
    closeMessageModal();
}

  
  // Load more creator profiles
  function loadMoreCreators() {
    const creatorProfiles = document.getElementById("creatorProfiles");
  
    // Add more profiles dynamically
    const newProfiles = [
      { name: "Creator 4", description: "Tech enthusiast and developer.", img: "https://via.placeholder.com/100" , "mail":"dfsd@dsgds.com"},
      { name: "Creator 5", description: "Artistic creator, innovating through design.", img: "https://via.placeholder.com/100" },
      { name: "Creator 6", description: "Musician and sound engineer.", img: "https://via.placeholder.com/100" },
    ];
  
    newProfiles.forEach(profile => {
      const profileElement = document.createElement("div");
      profileElement.classList.add("idea-profile");
      profileElement.onclick = () => openMessageModal(profile.name);
      profileElement.innerHTML = `
        <img src="${profile.img}" alt="${profile.name}" class="profile-img">
        <div class="profile-info">
          <h3>${profile.name}</h3>
          <p>${profile.description}</p>
          <button class="message-button">Message</button>
        </div>
      `;
      creatorProfiles.appendChild(profileElement);
    });
  
    // Hide +more button after loading more
    document.getElementById("loadMore").style.display = "none";
  }
