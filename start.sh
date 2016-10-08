
# Get the latest code
git pull origin master;

# Update the auto start scripts
cp -Rf .config/autostart/* ~/.config/autostart/;

# Start the Agent
npm run start;
