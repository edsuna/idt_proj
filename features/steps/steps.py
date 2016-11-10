from behave import *


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
        if expected == elem.text:
            found = True
            break
    assert found, "Didn't find text {}".format(expected)


@step('There should be "{num}" "{selector}"')
def step_impl(context, num, selector):
    elements = context.browser.find_by_css(selector)
    assert len(elements) == int(num)
