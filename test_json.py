import pandas as pd

def parse_text_to_csv(text):
    lines = text.splitlines()
    data = {'stage': [], 'question': [], 'answer': []}
    current_stage = ''
    current_question = ''
    # Assume that every question has an answer.
    # If an answer is not found, insert an empty string.

    for line in lines:
        line = line.strip()
        if "Cognitive Impairment" in line or "Dementia" in line:
            current_stage = line
        elif line.startswith("Question:"):
            # If there was a previous question without an answer, add an empty answer.
            if current_question:
                data['answer'].append('')
            current_question = line.replace("Question:", "").strip()
            data['stage'].append(current_stage)
            data['question'].append(current_question)
        elif line.startswith("Answer:"):
            current_answer = line.replace("Answer:", "").strip()
            data['answer'].append(current_answer)
            current_question = ''  # Reset current_question after getting an answer

    # If the last question did not have an answer, add an empty answer.
    if current_question and len(data['question']) > len(data['answer']):
        data['answer'].append('')

    print(data)
    df = pd.DataFrame(data)
    return df
# Example usage:
# Assuming 'text' contains the OCR extracted text
text = """
No Cognitive Impairment (NCI)
Question: Describe a daily activity you enjoy and who helps you with it.  
Answer: I enjoy walking in the garden. A caregiver accompanies me to ensure I'm safe.

Question: Share a memorable event from the past month.  
Answer: My family organized a small get-together for my birthday. We had cake and tea in the living room.

Question: What is one of your favorite meals, and who usually prepares it for you?  
Answer: My favorite meal is roast chicken with vegetables. My daughter cooks it for me on Sundays.

Question: Tell me about a hobby you engage in and any recent projects or activities you've done.  
Answer: I like listening to classical music. Recently, my caregiver helped me set up a playlist of my favorite symphonies.

Question: How do you keep in touch with friends and family? Describe a recent interaction.  
Answer: My family visits regularly, and we chat or look at family photos together. My grandson visited yesterday and showed me pictures from his graduation.


Subjective Cognitive Impairment (SCI)

Question: What was the main topic of the last book you read or movie you watched?  
Answer: The last book I read was about the history of the Roman Empire, focusing on Julius Caesar's reign.

Question: Tell me about a recent social event or gathering you attended.  
Answer: I attended a friend's birthday party two weeks ago. We had a barbecue in her backyard.

Question: Can you describe a favorite hobby of yours and what you last created or accomplished with it?  
Answer: I enjoy woodworking. Recently, I finished making a birdhouse for my garden.

Question: Recall a recent conversation with a friend or family member. What was it about?  
Answer: I talked to my sister last Sunday about planning a family reunion for next summer.

Question: How do you manage daily tasks and appointments? Describe your method.  
Answer: I use a digital calendar on my phone to set reminders for appointments and daily tasks.

Mild Cognitive Impairment (MCI)

Question: Describe your last visit to a new place. How did you navigate there?  
Answer: I visited a new art gallery downtown. I used a navigation app on my phone to find the location.

Question: What is a recent meal you cooked, and how did you prepare it?  
Answer: I made spaghetti carbonara. I followed a recipe from a cookbook, cooking the pasta and preparing the sauce with bacon and eggs.

Question: Share the plot of a movie or book you enjoyed recently.  
Answer: I watched a movie about a space exploration mission to Mars. The crew faced challenges but ultimately discovered signs of water.

Question: What strategies do you use to remember important dates or information?  
Answer: I write important dates on a physical calendar in the kitchen and also keep notes on my phone.

Question: Can you recall a project or task you completed recently? What was involved?  
Answer: I organized the garage last weekend. It involved sorting items into keep, donate, and trash categories.

Dementia

Question: Can you remember your phone number?
Answer: Yes, my home phone number is 1234567890.

Question: Can you remember your home address?
Answer: My address is 123th ave se, Seattle.

Question: Is Margret your sister or aunt?
Answer: She is my sister. 

Question: What are the primary three colors?
Answer: Red, blue, yellow.

Question: Can you list the four seasons of the year?
Answer: Spring, summer, fall, winter.

"""
df = parse_text_to_csv(text)
df.to_csv('output.csv', index=False)
