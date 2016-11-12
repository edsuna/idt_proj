from behave import *
from time import sleep


@step("that I am using a browser")
def step_impl(context):
    """
    :type context: behave.runner.Context
    """
    pass


@step('I visit "{url}"')
def step_impl(context, url):
    context.browser.visit('http://0.0.0.0:8080' + url)


@step('I should see "{expected}" in "{selector}"')
def step_impl(context, expected, selector):
    elements = context.browser.find_by_css(selector)
    found = False
    for elem in elements:
        if expected in elem.text:
            found = True
            break
    assert found, "Didn't find text {}".format(expected)


@step('There should be "{expected}" "{selector}"')
def step_impl(context, expected, selector):
    num = int(expected)
    elements = context.browser.find_by_css(selector)
    num_elements = len(elements)
    assert num_elements == num, "Expected {} but got {}".format(num, num_elements)


@step('I wait for "{selector}"')
def step_impl(context, selector):
    i = 0
    while i < 10:
        try:
            elem = context.browser.find_by_css(selector)
            return
        except:
            i = i+1
            sleep(0.1)
    assert False, 'Failed to find {}'.format(selector)


@when('I click "{selector}"')
def step_impl(context, selector):
    elem = context.browser.find_by_css(selector)
    elem.click()


@when('I double click "{selector}"')
def step_impl(context, selector):
    elem = context.browser.find_by_css(selector)
    elem.double_click()
