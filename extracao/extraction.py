
import nltk
nltk.download('rslp')
from nltk.corpus import words
nltk.download('stopwords')

import pandas as pd
import matplotlib.pyplot as plt
from wordcloud import WordCloud, STOPWORDS, ImageColorGenerator

data_london = 'reviews.csv'

df = pd.read_csv(data_london)
#print(df.head())

# Pré-prcessamento
print("Valores ausentes para contents: ", df.content.isnull().sum())
# eliminar as colunas com valores ausentes
#summary = df.dropna(subset=['summary'], axis=0)['summary']


all_content = " ".join(s for s in df.content)
print("Quantidade de Palavras: {}".format(len(all_content)))

stopwords = nltk.corpus.stopwords.words('portuguese') # Tratando as stop words para
#stemmer = nltk.stem.RSLPStemmer('portuguese')

wordcloud = WordCloud(stopwords=stopwords,
                      background_color="white",
                      width=1000, height=500,
                      max_font_size=50,
                      min_font_size=.5,contour_width=2, contour_color='white' ).generate(all_content)


# mostrar a imagem final
fig, ax = plt.subplots(figsize=(10,10))
ax.imshow(wordcloud, interpolation='bilinear')
ax.set_axis_off()
 
plt.imshow(wordcloud);
wordcloud.to_file("wordcloud_netflix.png")
