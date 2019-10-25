from django import forms

class EquationForm(forms.Form):
    equation= forms.CharField(widget=forms.TextInput(attrs={'id': 'equation', 'name':'equation', 'class':'non-visible'}), label='')