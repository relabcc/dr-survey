import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Box from 'components/Box';
import responsive from 'components/ThemeProvider/responsive';

import RadarChart from './radar';
const StyledContainer = Box.extend`
svg {
  width: 100%;
  height: auto;
}
.level-dot {
  transition: all 0.25s ease;
  cursor: pointer;
  r: ${({ dotRadius }) => dotRadius * 1.5};
  ${responsive.md`
    r: ${({ dotRadius }) => dotRadius};
    &:hover {
      opacity: 0.8;
    }
  `}
}
`;

class Radar extends PureComponent {
  componentDidMount() {
    const { data, ...props } = this.props;
    this.chart = new RadarChart(this.container, data, props);
    this.chart.on('change', this.handleOnChange);
  }

  handleOnChange = (values) => {
    const { onChange } = this.props;
    if (onChange) onChange(values.map((d) => d.value));
  }

  render() {
    const {
      data,
      width,
      onChange,
      clickable,
      levels,
      maxValue,
      ...props
    } = this.props;
    return (
      <Box align="center" {...props} mb="-4em">
        <StyledContainer
          dotRadius={width / 30}
          innerRef={(ref) => { this.container = ref; }}
        />
      </Box>
    );
  }
}

Radar.propTypes = {
  width: PropTypes.number,
  levels: PropTypes.number,
  maxValue: PropTypes.number,
  onChange: PropTypes.func,
  clickable: PropTypes.bool,
  data: PropTypes.arrayOf(PropTypes.shape({
    group: PropTypes.string,
    axis: PropTypes.string,
    sub: PropTypes.string,
    value: PropTypes.number,
  })),
};

export default Radar;
