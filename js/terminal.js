
    // terminal typing effect with multiple commands
    document.addEventListener('DOMContentLoaded', function() {
        const terminalContent = document.getElementById('terminal-content');
        const commands = [
          "git add .",
          "git commit -m \"my website\"",
          "git push"
        ];
        
        const responses = [
          "", 
          "[main 5f2a33d] my website\n 9 files changed, 484 insertions(+), 24 deletions(-)", 
          "Enumerating objects: 9, done.\nCounting objects: 100% (9/9), done.\nDelta compression using up to 8 threads\nCompressing objects: 100% (5/5), done.\nWriting objects: 100% (5/5), 1.23 KiB | 1.23 MiB/s, done.\nTotal 5 (delta 2), reused 0 (delta 0), pack-reused 0\nremote: Resolving deltas: 100% (2/2), completed with 2 local objects.\nTo github.com:zohairahmedd/portfolio.git\n   a1b2c3d..5f2a33d  main -> main" // Response for git push
        ];
        
        let currentCommandIndex = 0;
        let currentCharIndex = 0;
        let currentLineElement = null;
        let commandTextElement = null;
        let cursorElement = null;
        let isTyping = false;
        
        // function to create a new command line
        function createCommandLine() {
          const lineElement = document.createElement('div');
          lineElement.className = 'terminal-line';
          
          const promptElement = document.createElement('span');
          promptElement.className = 'terminal-prompt';
          promptElement.textContent = '$ ';
          lineElement.appendChild(promptElement);
          
          commandTextElement = document.createElement('span');
          commandTextElement.className = 'terminal-command';
          lineElement.appendChild(commandTextElement);
          
          cursorElement = document.createElement('span');
          cursorElement.className = 'terminal-cursor';
          lineElement.appendChild(cursorElement);
          
          // clear any existing content if this is the first command
          if (currentCommandIndex === 0) {
            terminalContent.innerHTML = '';
          }
          
          terminalContent.appendChild(lineElement);
          currentLineElement = lineElement;
          
          return lineElement;
        }
        
        // function to type the current command
        function typeCommand() {
          if (currentCharIndex < commands[currentCommandIndex].length) {
            commandTextElement.textContent += commands[currentCommandIndex].charAt(currentCharIndex);
            currentCharIndex++;
            setTimeout(typeCommand, Math.random() * 50 + 300);
          } else {
            currentLineElement.removeChild(cursorElement);
            setTimeout(showResponse, 500);
          }
        }
        
        // function to show command response
        function showResponse() {
          if (responses[currentCommandIndex]) {
            const responseElement = document.createElement('div');
            responseElement.className = 'terminal-response';
            responseElement.textContent = responses[currentCommandIndex];
            terminalContent.appendChild(responseElement);
          }
          
          currentCommandIndex++;
          currentCharIndex = 0;
          
          if (currentCommandIndex < commands.length) {
            setTimeout(nextCommand, 800); 
          }
        }
        
        // function to start the next command
        function nextCommand() {
          createCommandLine();
          typeCommand();
        }
        
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting && !isTyping) {
              isTyping = true;
              // Start immediately with no delay
              createCommandLine();
              typeCommand();
            }
          });
        }, { threshold: 0.5 });
        
        const terminalSection = document.querySelector('.terminal-section');
        if (terminalSection) {
          observer.observe(terminalSection);
        }
      });