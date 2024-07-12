"""empty message

Revision ID: 443551eaab75
Revises: 96add3443b52
Create Date: 2023-09-14 12:15:17.157573

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import postgresql

revision = '443551eaab75'
down_revision = '96add3443b52'
branch_labels = None
depends_on = None


def upgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('piece', schema=None) as batch_op:
        batch_op.add_column(sa.Column('midi', sa.LargeBinary(), server_default=sa.text("''::bytea"), nullable=True))
        batch_op.drop_column('midi_obj')

    # ### end Alembic commands ###


def downgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('piece', schema=None) as batch_op:
        batch_op.add_column(sa.Column('midi_obj', postgresql.BYTEA(), server_default=sa.text("'\\x'::bytea"), autoincrement=False, nullable=True))
        batch_op.drop_column('midi')

    # ### end Alembic commands ###