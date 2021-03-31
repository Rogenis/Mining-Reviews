import pandas as pd

from google_play_scraper import Sort, reviews_all

result = reviews_all(
    'com.netflix.mediaclient',
    sleep_milliseconds=0, # defaults to 0
    lang='pt-br', # defaults to 'en'
    country='br', # defaults to 'us'
    sort=Sort.MOST_RELEVANT,
    count= 10
    #filter_score_with=5 # defaults to None(means all score)
)

app_reviews_df = pd.DataFrame(result)
app_reviews_df.to_csv('reviews.csv', index=None, header=True)

