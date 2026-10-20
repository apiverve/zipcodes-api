from setuptools import setup, find_packages

setup(
    name='apiverve_zipcodeslookup',
    version='1.2.2',
    packages=find_packages(),
    include_package_data=True,
    install_requires=[
        'requests',
        'setuptools'
    ],
    description='Zip Codes Lookup finds all postal codes within a US city or resolves a five-digit ZIP code to its city and state. Paid plans add geographic coordinates.',
    author='APIVerve',
    author_email='hello@apiverve.com',
    url='https://apiverve.com/marketplace/zipcodes?utm_source=pypi&utm_medium=referral&utm_content=homepage',
    classifiers=[
        'Programming Language :: Python :: 3',
        'Operating System :: OS Independent',
    ],
    python_requires='>=3.6',
)
