from django.shortcuts import render
from .forms import EquationForm
import re

def homepage(request):
    answer = 0
    num1 = 0
    num2 = 0
    operator = ''
    equation = ''
    if request.method == 'POST':
        form = EquationForm(request.POST or None)
        if form.is_valid():
            data = request.POST.copy()
            equation = data.get('equation')         # getting user's equation in the form of string
            temp = re.findall(r'[-+]?\d*\.\d+|\d+', equation)     # finding integers in string using regular expression
            res = list(map(float, temp))              # adding numbers into list

            if '+' in equation:
                operator = '+'
                num1 = res[0]
                num2 = res[1]
                answer = add(num1, num2)
            elif '-' in equation:
                operator = '-'
                num1 = res[0]
                num2 = res[1]
                answer = subtract(num1, num2)
            elif 'x' in equation:
                operator = 'x'
                num1 = res[0]
                num2 = res[1]
                answer = multiply(num1, num2)
            elif '/' in equation:
                operator = '/'
                num1 = res[0]
                num2 = res[1]
                answer = divide(num1, num2)
            elif '%' in equation:
                operator = '%'
                num1 = res[0]
                num2 = res[1]
                answer = modulo(num1, num2)
            else:
                print(f"Invalid Equation")
            context = {
                        'title': 'Home',
                       'form': form,
                       'answer': answer,
                       'num1': num1,
                       'num2': num2,
                       'operator': operator,
                       'equation': equation
                       }
        return render(request, 'calculator/home.html', context)
    else:
        form = EquationForm()
        context = {
                    'title': 'Home',
                    'form': form,
                    'answer': answer,
                    'num1': num1,
                    'num2': num2,
                    'operator': operator,
                   'equation': equation
                    }
    return render(request, 'calculator/home.html', context)

def add(num1, num2):
    result = num1+num2
    return result

def subtract(num1, num2):
    result = num1-num2
    return result

def multiply(num1, num2):
    result = num1*num2
    return result

def divide(num1, num2):
    result = num1/num2
    return result

def modulo(num1, num2):
    result = num1%num2
    return result