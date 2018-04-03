
import {Component} from 'react';
import * as React from 'react';
import * as classNames from 'classnames';
import {IBaseComponent} from '../template/component';
import '../styles/common/reset.less';
import './index.less';

export interface IBadgeProps extends IBaseComponent {
  /**
   * 展示的数字
   */
  count: number;
  /**
   * 展示数字最大值
   */
  max: number;
  /**
   * count为0的时候是否显示徽标
   */
  showZero: boolean;
  /**
   * 不显示数字
   */
  dotted: boolean;
}

export interface IBadgeState {

}

/**
 * **徽标**-一般用于消息提醒
 */
export class Badge extends Component<IBadgeProps, IBadgeState> {
  static defaultProps = {
    max: 99,
    showZero: false,
    dotted: false,
  };

  render() {
    const {className, style, count, showZero, dotted, max, children, ...otherProps} = this.props;
    const preCls = 'yoshino-badge';
    const clsName = classNames(
      className,
      {
        [`${preCls}-dot`]: !!dotted,
        [`${preCls}-count`]: !dotted,
        [`${preCls}-position`]: !!children,
      },
    );
    return (
      <div className={preCls}>
        {children}
        <span
          className={clsName}
          style={style}
          {...otherProps}
        >
          {!!dotted ? null : (count >= max ? `${max}+` : count)}
        </span>
      </div>
    );
  }
}

export default Badge;
