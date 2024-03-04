<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Benefits of Participating in Our Skills Survey from {{ config('app.name') }}</title>
</head>
<body>
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">

        <h1 style="color: #333; font-weight: bold; margin-bottom: 10px; text-align: center;">Thank you {{ $user->name }} for participating in our survey! 🌟</h1>
        <p style="margin: 20px 0;">We appreciate you taking the time to provide us with valuable insights into your skillset. Your feedback will help us tailor our services to better meet your needs and preferences.</p>
    
        <p style="margin: 20px 0;">By participating in this survey, you're not only helping us improve, but you're also investing in your own growth and development. Here's how your participation benefits you:</p>
    
        <ol>
            <li style=" margin: 10px 0;"><strong>Personalized Learning Journey:</strong> Your responses will enable us to offer tutorials and resources tailored to your specific interests and skill levels. This means you'll have access to content that resonates with you and supports your learning goals.</li>
            <li style=" margin: 10px 0;"><strong>Expanded Opportunities:</strong> By identifying your current skills and areas for improvement, you'll be better equipped to pursue new opportunities and advance in your career or personal projects. Our goal is to empower you to reach your full potential.</li>
            <li style=" margin: 10px 0;"><strong>Community Engagement:</strong> Your participation fosters a sense of community among learners like yourself. By sharing your experiences and insights, you contribute to a collaborative learning environment where everyone can thrive and support each other.</li>
        </ol>
    
        <p style="margin: 20px 0;">We're excited to embark on this learning journey with you! Stay tuned for updates and personalized recommendations based on your survey responses.</p>
    
        <p style="margin: 20px 0;">Thank you once again for being part of our community.</p>
        <p style="display: flex; margin: 20px 0;">
            <a style="display: flex; padding-left: 20px; color: #038a2c;" href="https://api.whatsapp.com/send?phone=+2347030068148">
                 
             <span style="width: 30px; margin-right: 5px;"><img src="{{ asset('/storage/img/whatsapp.png') }}" alt=""></span>
                 Send message on WhatsApp
             </a>
         </p>
    
        <p style="margin: 20px 0;">Happy learning! 🚀</p>

    
        <a href="http://learncreategrow.com.ng" style="margin: 20px 0; width: 80px;"><em> <img src="{{ asset('/storage/img/logo-black.png') }}" alt=""> <!-- Add the path to your logo file --></em></a>
    </div>
</body>
</html>
