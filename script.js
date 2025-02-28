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

    // AI Interface Elements
    const aiConversation = document.getElementById('ai-conversation');
    const aiInput = document.getElementById('ai-input');
    const aiSend = document.getElementById('ai-send');
    const suggestionButtons = document.querySelectorAll('.suggestion-button');
    
    // Mobile Toggle
    const mobileAiToggle = document.getElementById('mobile-ai-toggle');
    const aiInterfaceIntegrated = document.getElementById('ai-interface-integrated');
    
    if (mobileAiToggle) {
        mobileAiToggle.addEventListener('click', function() {
            aiInterfaceIntegrated.classList.toggle('mobile-visible');
        });
    }

    // Function to add message to the conversation
    function addMessage(text, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message', sender);
        
        const messagePara = document.createElement('p');
        messagePara.textContent = text;
        
        messageDiv.appendChild(messagePara);
        
        aiConversation.appendChild(messageDiv);
        aiConversation.scrollTop = aiConversation.scrollHeight;
    }

    // Function to handle user input
    function handleUserInput() {
        const message = aiInput.value.trim();
        if (message !== '') {
            // Add user message
            addMessage(message, 'user');
            
            // Clear input field
            aiInput.value = '';
            
            // Simulate AI response after delay
            setTimeout(function() {
                respondToMessage(message);
            }, 1000);
        }
    }

    // Send message when button is clicked
    aiSend.addEventListener('click', handleUserInput);
    
    // Send message when Enter key is pressed
    aiInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            handleUserInput();
        }
    });
    
    // Handle suggestion buttons
    suggestionButtons.forEach(button => {
        button.addEventListener('click', function() {
            const text = this.getAttribute('data-text');
            aiInput.value = text;
            handleUserInput();
        });
    });

    // AI responses based on user input
    function respondToMessage(message) {
        let response = '';
        
        message = message.toLowerCase();
        
        if (message.includes('hola') || message.includes('buenos días') || message.includes('buenas tardes')) {
            response = '¡Hola! ¿En qué puedo ayudarte hoy? ¿Estás buscando información sobre cómo Maia puede transformar tu negocio inmobiliario?';
        } 
        else if (message.includes('precio') || message.includes('plan') || message.includes('costo')) {
            response = 'Ofrecemos tres planes adaptados a diferentes necesidades:\n\n• Básico ($40/mes): Ideal para pequeñas inmobiliarias con hasta 5 propiedades activas.\n\n• Profesional ($120/mes): Para inmobiliarias en crecimiento con hasta 20 propiedades y funciones avanzadas.\n\n• Empresarial ($200/mes): Propiedades ilimitadas con todas las características premium.\n\n¿Te gustaría conocer más detalles sobre alguno de estos planes?';
        }
        else if (message.includes('demo') || message.includes('prueba') || message.includes('recorrido')) {
            response = 'Puedes probar nuestro recorrido virtual en la parte superior de la página. Es una demostración interactiva que te permite experimentar cómo tus clientes navegarían por una propiedad con la asistencia de Maia. ¿Hay alguna característica específica que te gustaría explorar?';
        }
        else if (message.includes('contacto') || message.includes('hablar') || message.includes('asesor')) {
            response = 'Puedes contactarnos a través del formulario en la sección de contacto o directamente al email info@maiavr.cl. También podemos coordinar una demostración personalizada para tu inmobiliaria. ¿Prefieres que un asesor te llame?';
        }
        else if (message.includes('cómo funciona') || message.includes('como funciona')) {
            response = 'Maia combina recorridos virtuales 3D con inteligencia artificial conversacional para guiar a los potenciales compradores. El sistema:\n\n1. Permite a los clientes explorar propiedades virtualmente\n2. Responde preguntas en tiempo real sobre características, precios, etc.\n3. Recopila datos sobre preferencias para calificar leads\n4. Programa visitas y conecta con agentes cuando el cliente está listo\n\n¿Te gustaría saber más sobre alguna de estas funcionalidades?';
        }
        else if (message.includes('integrar') || message.includes('implementar')) {
            response = 'Integrar Maia en tu inmobiliaria es muy sencillo:\n\n1. Selecciona un plan según tus necesidades\n2. Nuestro equipo configura tu cuenta en 24-48 horas\n3. Subimos tus propiedades y personalizamos la IA\n4. Te proporcionamos códigos para integrar en tu sitio web\n\nOfrecemos soporte completo durante todo el proceso. ¿Te gustaría programar una llamada con nuestro equipo técnico?';
        }
        else if (message.includes('gracias')) {
            response = '¡De nada! Estoy aquí para ayudarte. Si tienes más preguntas sobre Maia o quieres conocer más sobre cómo podemos ayudar a tu negocio inmobiliario, no dudes en preguntar.';
        }
        else {
            response = 'Maia está diseñada para transformar la experiencia de venta inmobiliaria, combinando tours virtuales con IA conversacional. Esto permite a tus clientes explorar propiedades desde cualquier lugar, mientras reciben respuestas inmediatas a sus preguntas. ¿Hay algún aspecto específico que te interese conocer?';
        }
        
        addMessage(response, 'ai');
    }

    // Virtual Tour Demo
    const startDemoButton = document.getElementById('start-demo');
    const demoOverlay = document.getElementById('demo-overlay');
    
    if (startDemoButton && demoOverlay) {
        startDemoButton.addEventListener('click', function(e) {
            e.preventDefault();
            demoOverlay.style.opacity = '0';
            setTimeout(function() {
                demoOverlay.style.display = 'none';
            }, 500);
        });
    }
}); 