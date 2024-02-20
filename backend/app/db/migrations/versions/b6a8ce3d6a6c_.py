"""empty message

Revision ID: b6a8ce3d6a6c
Revises: b4d6181c0837
Create Date: 2023-08-29 12:20:05.390772

"""
from alembic import op
import sqlalchemy as sa


revision = 'b6a8ce3d6a6c'
down_revision = 'b4d6181c0837'
branch_labels = None
depends_on = None


def upgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('piece', schema=None) as batch_op:
        batch_op.add_column(sa.Column('id', sa.Integer(), nullable=False))
        batch_op.drop_column('music_id')

    # ### end Alembic commands ###


def downgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('piece', schema=None) as batch_op:
        batch_op.add_column(sa.Column('music_id', sa.INTEGER(), autoincrement=True, nullable=False))
        batch_op.drop_column('id')

    # ### end Alembic commands ###