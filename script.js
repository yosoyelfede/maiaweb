document.addEventListener('DOMContentLoaded', function() {
    // Header scroll effect
    const header = document.getElementById('header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Chat functionality
    const chatToggle = document.getElementById('chat-toggle');
    const chatContainer = document.getElementById('chat-container');
    const chatClose = document.getElementById('chat-close');
    const chatBody = document.getElementById('chat-body');
    const chatInput = document.getElementById('chat-input-field');
    const chatSend = document.getElementById('chat-send');

    // Open chat
    chatToggle.addEventListener('click', function() {
        chatContainer.classList.add('active');
    });

    // Close chat
    chatClose.addEventListener('click', function() {
        chatContainer.classList.remove('active');
    });

    // Send message
    function sendMessage() {
        const message = chatInput.value.trim();
        if (message !== '') {
            // Add user message
            addMessage(message, 'outgoing');
            chatInput.value = '';
            
            // Show typing indicator
            showTypingIndicator();
            
            // Simulate AI response after delay
            setTimeout(function() {
                removeTypingIndicator();
                respondToMessage(message);
            }, 1500);
        }
    }

    chatSend.addEventListener('click', sendMessage);
    chatInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });

    // Add message to chat
    function addMessage(text, type) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message', type);
        
        const messageContent = document.createElement('div');
        messageContent.classList.add('message-content');
        messageContent.textContent = text;
        
        const messageTime = document.createElement('div');
        messageTime.classList.add('message-time');
        messageTime.textContent = 'Ahora';
        
        messageDiv.appendChild(messageContent);
        messageDiv.appendChild(messageTime);
        
        chatBody.appendChild(messageDiv);
        chatBody.scrollTop = chatBody.scrollHeight;
    }

    // Show typing indicator
    function showTypingIndicator() {
        const typingDiv = document.createElement('div');
        typingDiv.classList.add('message', 'incoming', 'typing-indicator-container');
        
        const typingIndicator = document.createElement('div');
        typingIndicator.classList.add('typing-indicator');
        
        for (let i = 0; i < 3; i++) {
            const dot = document.createElement('span');
            typingIndicator.appendChild(dot);
        }
        
        typingDiv.appendChild(typingIndicator);
        chatBody.appendChild(typingDiv);
        chatBody.scrollTop = chatBody.scrollHeight;
    }

    // Remove typing indicator
    function removeTypingIndicator() {
        const typingIndicator = document.querySelector('.typing-indicator-container');
        if (typingIndicator) {
            typingIndicator.remove();
        }
    }

    // AI responses based on user input
    function respondToMessage(message) {
        let response = '';
        
        message = message.toLowerCase();
        
        if (message.includes('hola') || message.includes('buenos días') || message.includes('buenas tardes')) {
            response = '¡Hola! ¿En qué puedo ayudarte hoy? ¿Estás buscando una propiedad específica o quieres conocer más sobre nuestros servicios?';
        } 
        else if (message.includes('precio') || message.includes('plan') || message.includes('costo')) {
            response = 'Ofrecemos tres planes: Básico ($40/mes), Profesional ($120/mes) y Empresarial ($200/mes). ¿Te gustaría conocer más detalles sobre alguno de ellos?';
        }
        else if (message.includes('demo') || message.includes('prueba')) {
            response = 'Puedes probar nuestra demo en la sección "Experimenta Maia en Acción". ¿Te gustaría que te guíe hasta allí?';
        }
        else if (message.includes('contacto') || message.includes('hablar') || message.includes('asesor')) {
            response = 'Puedes contactarnos a través del formulario en la sección de contacto o directamente al email info@maiavr.cl. ¿Prefieres que un asesor te llame?';
        }
        else if (message.includes('gracias')) {
            response = '¡De nada! Estoy aquí para ayudarte. ¿Hay algo más en lo que pueda asistirte?';
        }
        else {
            response = 'Entiendo. ¿Te gustaría conocer más sobre cómo Maia puede ayudar a tu negocio inmobiliario? Puedo mostrarte nuestras características principales o guiarte a través de un recorrido virtual de demostración.';
        }
        
        addMessage(response, 'incoming');
    }

    // Virtual Tour Demo
    const startTourButton = document.getElementById('start-tour');
    const tourOverlay = document.getElementById('tour-overlay');
    
    if (startTourButton && tourOverlay) {
        startTourButton.addEventListener('click', function(e) {
            e.preventDefault();
            tourOverlay.style.opacity = '0';
            setTimeout(function() {
                tourOverlay.style.display = 'none';
            }, 500);
        });
    }

    // Auto-open chat after 5 seconds
    setTimeout(function() {
        chatContainer.classList.add('active');
    }, 5000);
}); 