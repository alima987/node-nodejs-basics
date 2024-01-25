const parseEnv = () => {
    const RssVariables = Object.entries(process.env)
    .filter(([key]) => key.StartWith('RSS_'))
    .map(([key, value]) => `${key}=${value}`)
    .join('; ')
    console.log(RssVariables)
};

parseEnv();