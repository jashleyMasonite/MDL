import React from 'react'
import { shallow } from 'enzyme'
import RadioGroup from './react'

describe('RadioGroup', () => {
  let props
  let wrapper
  let listItems

  beforeEach(() => {
    props = {
      checked: jest.fn(),
      onChange: jest.fn(),
      choices: [],
    }

    wrapper = shallow(<RadioGroup {...props} />)
    listItems = wrapper.find('li')
  })

  describe('rendering with defaults', () => {
    it('should render correctly', () => {
      expect(wrapper).toMatchSnapshot()
    })

    it('Should contain no list items if the choices passed in are an empty array', () => {
      expect(wrapper.find('li').length).toBe(0)
    })

    it("should not render a label if one isn't provided", () => {
      expect(wrapper.find('.radio__label').length).toBe(0)
    })
  })

  describe('rendering with props', () => {
    beforeEach(() => {
      props = {
        ...props,
        choices: [
          {
            label: 'Filter 1',
            value: 'FILTER1',
          },
          {
            label: 'Filter 2',
            value: 'FILTER2',
          },
        ],
      }

      wrapper = shallow(<RadioGroup {...props} />)
      listItems = wrapper.find('li')
    })

    it('should render correctly', () => {
      expect(wrapper).toMatchSnapshot()
    })

    it('should render correctly with row passed in', () => {
      wrapper.setProps({ row: true })
      expect(wrapper).toMatchSnapshot()
    })

    it('Should render li element equivalent to the number of choices passed in', () => {
      expect(listItems.length).toBe(props.choices.length)
    })

    it('Should render each list item with the key being the value passed into them from the choices', () => {
      wrapper.find('li').forEach((listItem, index) => {
        expect(listItem.key()).toBe(props.choices[index].value)
      })
    })
  })

  describe('with user actions', () => {
    beforeEach(() => {
      props = {
        ...props,
        choices: [
          {
            label: 'Filter 1',
            value: 'FILTER1',
          },
          {
            label: 'Filter 2',
            value: 'FILTER2',
          },
          {
            label: 'Filter 3',
            value: 'FILTER 3',
          },
        ],
      }
      wrapper = shallow(<RadioGroup {...props} />)
    })
    it('should call onChange when a radio item is clicked', () => {
      wrapper
        .find('Radio')
        .at(0)
        .simulate('click')
      expect(props.onChange).toHaveBeenCalledTimes(1)
    })
  })
})
